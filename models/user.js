const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cart: {
    items: [
      {
        count: {
          type: Number,
          require: true,
          default: 1
        },
        courseId: {
          type: Schema.Types.ObjectId,
          required: true
        }
      }
    ]
  }
});

userSchema.methods.addToCart = function (course) {
  const clonedItems = [...this.cart.items];
  const idx = clonedItems.findIndex(c => {
    return c.courseId.toString() === course._id.toString();
  });

  if (idx >= 0) {
    clonedItems[idx].count = clonedItems[idx].count + 1;
  } else {
    console.log(course)
    clonedItems.push({
      courseId: course._id,
      count: 1
    })
  }

  this.cart = { items: clonedItems };
  return this.save();
}


module.exports = model('User', userSchema);