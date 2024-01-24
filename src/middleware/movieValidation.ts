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
        if (value < 0 || value > 5) {
          throw new Error("The rating needs to be between 0 and 10");
        }
        return true;
      }),
    body("description").isString().withMessage("Description is mandaroty"),
    body("director").isString().withMessage("Director is mandaroty"),
    body("poster").isURL().withMessage("Image needs to be a URL."),
  ];
};
