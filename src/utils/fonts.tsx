import { Poppins, Russo_One } from "next/font/google";

export const russo = Russo_One({ weight: ["400"], subsets: ["latin"] });
export const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
