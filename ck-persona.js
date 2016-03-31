Cols = new Mongo.Collection("cols");

// Cols.insert({
//   img_src: "ckal.png",
//   img_alt: "Red glasses; blue Adidas jacket.",
//   desc: "This is how I will be remembered."
// });
// Cols.insert({
//   img_src: "ckal.png",
//   img_alt: "Red glasses; blue Adidas jacket.",
//   desc: "This is how I will be remembered."
// });
// Cols.insert({
//   img_src: "ckal.png",
//   img_alt: "Red glasses; blue Adidas jacket.",
//   desc: "This is how I will be remembered."
// });
if (Meteor.isClient) {
  Template.threeCols.helpers({
    title: "About Me",
    desc: "Kalvin Chan. Number 8.",
    cols: [
      {
        img_src: "ckal.png",
        img_alt: "Red glasses; blue Adidas jacket.",
        img_desc: "This is how I will be remembered."
      },
      {
        img_src: "ckal.png",
        img_alt: "Red glasses; blue Adidas jacket.",
        img_desc: "This is how I will be remembered."
      },
      {
        img_src: "ckal.png",
        img_alt: "Red glasses; blue Adidas jacket.",
        img_desc: "This is how I will be remembered."
      },
    ]
  });
}
