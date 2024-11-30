import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthService } from "./auth.service";

@Controller("users")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post("register")
  async register(
    @Body() { username, password }: { username: string; password: string },
  ): Promise<string> {
    return this.userService.registerUser(username, password);
  }

  @Post("login")
  async login(
    @Body() { username, password }: { username: string; password: string },
  ): Promise<{ token: string }> {
    const user = await this.userService.validateUser(username, password);
    if (!user) {
      throw new BadRequestException("Incorrect username or password");
    }

    const token = this.authService.generateToken(user);
    return { token };
  }
}
