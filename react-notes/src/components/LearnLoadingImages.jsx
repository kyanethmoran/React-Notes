import React from "react";
import codingMeme from "../assets/images/codingMeme.png";

const LearnLoadingImages = () => {
  return (
    <>
      <h2>How To Populate Images:</h2>
      <p>
        This is going to be very simple. But many webpages will have images to
        display things and there are a few ways to handle images.
      </p>
      <ol>
        <li>
          Find and image you are going to use and save it to your assests in an
          image folder to stay better organized: In my case I'm using a coding
          meme.
        </li>
        <li>
          Import the image from assests into the component you want to display
          it.
        </li>
        <li>
          Use an &lt;img&gt; tag to display your image
          <ul>
            <li>
              <pre>
                <code>
                  &lt;img src={codingMeme} alt="A meme about coding" width={500}{" "}
                  /&gt;
                </code>
              </pre>
            </li>
          </ul>
        </li>
      </ol>
      <h3>Here Is Our Coding Meme:</h3>
      {/* src is going to be the name of the file that you are displaying, alt is alternate text to help with things like 
      screen readers for those who have vision impairment, and width will specify how many pixels wide you want the image to 
      display as */}
      <img src={codingMeme} alt="A meme about coding" width={500} />
    </>
  );
};

export default LearnLoadingImages;
