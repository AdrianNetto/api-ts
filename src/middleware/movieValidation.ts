import { body } from "express-validator";

export const movieCreateValidator = () => {
  return [
    body("title")
      .isString()
      .withMessage("Title is mandatory")
      .isLength({ min: 3 })
      .withMessage("The title needs at least 3 characters"),
    body("rating")
      .isNumeric()
      .withMessage("The rating needs to be a number")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("The rating needs to be between 0 and 10");
        }
        return true;
      }),
  ];
};
