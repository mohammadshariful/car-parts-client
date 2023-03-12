import React from "react";
import authorImg from "../../assets/images/author-img.jpg";
import TitleChange from "../Shared/TitleChange/TitleChange";
const Blogs = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <TitleChange title="Blogs" />
      <div className="blog-1 bg-white p-10 shadow-xl rounded-lg mb-3">
        <h2 className="text-xl">
          Question :
          <span className="text-primary text-lg">
            How will you improve the performance of a React Application?
          </span>
        </h2>
        <div className="my-3">
          <img
            className="rounded-md mx-auto w-[600px]"
            src="https://i.ibb.co/GdW54bh/1-PInrah-AEk4ku-JFk-Yq-ZLig.png"
            alt=""
          />
        </div>
        <ul className="list-decimal">
          <li>Using Immutable Data Structures</li>
          <li> Function/Stateless Components and React.PureComponent</li>
          <li>Using Production Mode Flag in Webpack</li>
          <li>Dependency optimization</li>
          <li>Use React.Fragments to Avoid Additional HTML Element Wrappers</li>
          <li>Avoid Inline Function Definition in the Render Function</li>
          <li>Throttling and Debouncing Event Action in JavaScript</li>
          <li>Avoid using Index as Key for map</li>
        </ul>
        <div className="flex items-center mt-2">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={authorImg} alt="authorImg" />
            </div>
          </div>
          <h3 className="mx-3">Mohammad Shariful</h3>
        </div>
      </div>
      <div className="blog-2 bg-white p-10 shadow-xl rounded-lg mb-3">
        <h2 className="text-xl">
          Question :
          <span className="text-primary text-lg">
            What are the different ways to manage a state in a React
            application?
          </span>
        </h2>
        <div className="my-3">
          <img
            className="rounded-md mx-auto w-[600px]"
            src="https://i.ibb.co/Ssgzqjy/state.png"
            alt=""
          />
        </div>
        <p className="text-lg">
          There are four main type of state management in react application
        </p>
        <ul className="list-decimal">
          <li>Local state</li>
          <li>Global state</li>
          <li>Server state</li>
          <li>URL state</li>
        </ul>
        <div className="flex items-center mt-2">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={authorImg} alt="authorImg" />
            </div>
          </div>
          <h3 className="mx-3">Mohammad Shariful</h3>
        </div>
      </div>
      <div className="blog-3 bg-white p-10 shadow-xl rounded-lg mb-3">
        <h2 className="text-xl">
          Question :
          <span className="text-primary text-lg">
            How does prototypical inheritance work?
          </span>
        </h2>
        <div className="my-3">
          <img
            className="rounded-md mx-auto w-[600px]"
            src="https://i.ibb.co/1QR6y1d/proto.png"
            alt=""
          />
        </div>
        <p>
          Simply put, prototypical inheritance refers to the ability to access
          object properties from another object. We use a JavaScript prototype
          to add new properties and methods to an existing object constructor.
          We can then essentially tell our JS code to inherit properties from a
          prototype. Prototypical inheritance allows us to reuse the properties
          or methods from one JavaScript object to another through a reference
          pointer function.
        </p>
        <div className="flex items-center mt-2">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={authorImg} alt="authorImg" />
            </div>
          </div>
          <h3 className="mx-3">Mohammad Shariful</h3>
        </div>
      </div>
      <div className="blog-4 bg-white p-10 shadow-xl rounded-lg mb-3">
        <h2 className="text-xl">
          Question :
          <span className="text-primary text-lg">
            What is a unit test? Why should write unit tests?
          </span>
        </h2>
        <div className="my-3">
          <img
            className="rounded-md mx-auto w-[600px]"
            src="https://i.ibb.co/4RHHrJN/unit-test.png"
            alt=""
          />
        </div>
        <p>
          Unit testing is testing the smallest testable unit of an application.
          It is done during the coding phase by the developers. Unit testing
          ensures that all code meets quality standards before it's deployed.
          This ensures a reliable engineering environment where quality is
          paramount. Over the course of the product development life cycle, unit
          testing saves time and money, and helps developers write better code,
          more efficiently.
        </p>
        <div className="flex items-center mt-2">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={authorImg} alt="authorImg" />
            </div>
          </div>
          <h3 className="mx-3">Mohammad Shariful</h3>
        </div>
      </div>
      <div className="blog-5 bg-white p-10 shadow-xl rounded-lg mb-3">
        <h2 className="text-xl">
          Question :
          <span className="text-primary text-lg">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </span>
        </h2>
        <div className="my-3">
          <img
            className="rounded-md mx-auto w-[600px]"
            src="https://i.ibb.co/Ky9dXDJ/find-Product.png"
            alt=""
          />
        </div>
        <p className="text-xl">
          Let's started how to find a product an array of object.
        </p>
        <p>
          First time declear a array of object where will be product name,price
          ,product description. <br />
          Declear a findProducts function which function find product and retun
          the value.This function give a parameter which name productName.I also
          parameter name store another variable and convert case sensitive.We
          know that filter is one of array method.Now we are easily implement
          filter method.filter method loop all array elemet.filter method first
          parameter take every elemet and every element includes name
          property.parameter name and property name do the match should both
          name case sensitive.when filter method loop startd every time check
          inside product proter name would include parameter name.when the match
          both name then filter method return true and also array of object
          return.
        </p>
        <div className="flex items-center mt-2">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={authorImg} alt="authorImg" />
            </div>
          </div>
          <h3 className="mx-3">Mohammad Shariful</h3>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
