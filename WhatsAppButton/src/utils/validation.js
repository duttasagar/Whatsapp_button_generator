export function cleanPhone(phone) {
  if (!phone) return "";
  return phone.replace(/[^\d+]/g, "");
}


export const validate = (data) => {
  let errors = {};

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(data.phone)) {
    errors.phone = "Phone must be 10 digits";
  }

  if (!data.message.trim()) {
    errors.message = "Message cannot be empty";
  }

  if (!data.label.trim()) {
    errors.label = "Button label is required";
  }

  const allowedSizes = ["small", "medium", "large"];
  if (!allowedSizes.includes(data.size)) {
    errors.size = "Invalid size selected";
  }

  const allowedShapes = ["rounded", "square", "pill"];
  if (!allowedShapes.includes(data.shape)) {
    errors.shape = "Invalid shape selected";
  }

  if (!data.color.trim()) {
    errors.color = "Color is required";
  }

  const allowedPositions = ["inline", "left", "right", "floating"];
  if (!allowedPositions.includes(data.position)) {
    errors.position = "Invalid position selected";
  }

  if (typeof data.newTab !== "boolean") {
    errors.newTab = "newTab must be true or false";
  }

  return errors;
};
