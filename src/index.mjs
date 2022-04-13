import asciify from "asciify-image";

var options = {
  fit: "box",
  width: 85,
  // height: 40,
  color: true,
};

const url = "images/Hatsune03.jpg";

async function asciifiyng(imageUrl) {
  try {
    const result = await asciify(`src/${imageUrl}`, options);
    return result;
  } catch (error) {
    console.error(error);
  }
}

const image = await asciifiyng(url);

console.log(image);
