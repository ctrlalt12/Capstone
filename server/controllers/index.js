import { Router } from  "express";
import Pizza from "../models/Pizza.js";

const router = Router();
// Create pizza route
router.post("/", async (request, response) => {
  try {
    const newPizza = new Pizza(request.body);

    const data = await newPizza.save();
// Update a single pizza by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Pizza.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          crust: body.crust,
          cheese: body.cheese,
          sauce: body.sauce,
          toppings: body.toppings
        }
      },
      {
        new: true,
        runValidators: true
      }
    );

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ('name' in error && error.name === 'ValidationError') return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});
    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError") return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});
export default router;
