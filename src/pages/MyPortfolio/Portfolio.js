import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaSearchLocation,
} from "react-icons/fa";
import contact from "../../assets/images/contactImg.jpg";
import shariful from "../../assets/images/shariful.jpg";
const Portfolio = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5">
        <div className="w-full lg:w-50">
          <h2 className="text-2xl">
            <span className="text-3xl text-success">I'm</span> Mohammad Shariful
          </h2>
          <h3 className="text-xl text-success">Web Developer</h3>
          <p>
            Hey,I'm a Front Developer near Developer build,I love structure and
            order and I also stand for quality.I love spending time on fixing
            little detalis and optimizing code link also I like working in a
            team. you will learn faster and much more.As the saying goes,two
            heads are better than one.
          </p>
          <button className="btn btn-primary btn-md px-5 mt-3">
            <a href="https://docs.google.com/document/d/1O6juJf_8M9-6N_hHHSESAoGwVdqZTDyhuf5BNL0M4pE/edit?usp=sharing">
              Hire Me
            </a>
          </button>
        </div>
        <div className="w-full lg:w-50 flex justify-center ">
          <div className="avatar text-center">
            <div className="w-48 rounded-full">
              <img src={shariful} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center  gap-5 mt-6">
        <div className="card w-full lg:max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">Technical Skills</h2>
            <div className="flex justify-between items-center">
              <p>HTMl</p>
              <p className="text-right">98%</p>
            </div>
            <progress
              className="progress progress-success"
              value="98"
              max="100"
            ></progress>
            <div className="flex justify-between items-center">
              <p>CSS</p>
              <p className="text-right">90%</p>
            </div>
            <progress
              className="progress progress-success "
              value="90"
              max="100"
            ></progress>
            <div className="flex justify-between items-center">
              <p>Bootstrap</p>
              <p className="text-right">85%</p>
            </div>
            <progress
              className="progress progress-success"
              value="85"
              max="100"
            ></progress>
            <div className="flex justify-between items-center">
              <p>Tailwind</p>
              <p className="text-right">80%</p>
            </div>
            <progress
              className="progress progress-success "
              value="80"
              max="100"
            ></progress>
            <div className="flex justify-between items-center">
              <p>Javascript</p>
              <p className="text-right">80%</p>
            </div>
            <progress
              className="progress progress-success "
              value="80"
              max="100"
            ></progress>
            <div className="flex justify-between items-center">
              <p>React</p>
              <p className="text-right">85%</p>
            </div>
            <progress
              className="progress progress-success"
              value="85"
              max="100"
            ></progress>
            <div className="flex justify-between items-center">
              <p>Node Js</p>
              <p className="text-right">70%</p>
            </div>
            <progress
              className="progress progress-success"
              value="70"
              max="100"
            ></progress>
            <div className="flex justify-between items-center">
              <p>MongoDB</p>
              <p className="text-right">75%</p>
            </div>
            <progress
              className="progress progress-success "
              value="75"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card w-full lg:max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="font-bold text-xl text-center">Project </h2>
            <ul className="list-decimal">
              <li>
                <h3 className="font-bold">Car Warehouse</h3>
                <a
                  className="text-success"
                  href="https://car-rev-68abf.web.app/"
                >
                  Website Link
                </a>
                |
                <a
                  className="text-primary"
                  href="https://github.com/mohammadshariful/car-warehouse-client"
                >
                  Client Side Code
                </a>
                |
                <a
                  className="text-success"
                  href="https://github.com/mohammadshariful/car-warehouse-server"
                >
                  Server Side Code
                </a>
              </li>
              <li>
                <h3 className="font-bold">Dexter Fitness</h3>
                <a
                  className="text-success"
                  href="https://dexter-fitness.web.app/"
                >
                  Website Link
                </a>
                |
                <a
                  className="text-primary"
                  href="https://github.com/mohammadshariful/dexter-fitness"
                >
                  Client Side Code
                </a>
              </li>
              <li>
                <h3 className="font-bold">Todo Application</h3>
                <a
                  className="text-success"
                  href="https://todo-application-40d91.web.app/login"
                >
                  Website Link
                </a>
                |
                <a
                  className="text-primary"
                  href="https://github.com/mohammadshariful/Todos_Client_With_Backend"
                >
                  Client Side Code
                </a>
                |
                <a
                  className="text-success"
                  href="https://github.com/mohammadshariful/Todos_Server"
                >
                  Server Side Code
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card w-full lg:max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">
              Professionals Skills
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 mt-6">
              <div>
                <div
                  className="radial-progress bg-primary text-primary-content border-4 border-primary"
                  style={{ value: 95 }}
                >
                  95%
                </div>
                <p className="font-bold">Communicate</p>
              </div>
              <div>
                <div
                  className="radial-progress bg-primary text-primary-content border-4 border-primary"
                  style={{ value: 90 }}
                >
                  90%
                </div>
                <p className="font-bold">Team Work</p>
              </div>
              <div>
                <div
                  className="radial-progress bg-primary text-primary-content border-4 border-primary"
                  style={{ value: 80 }}
                >
                  80%
                </div>
                <p className="font-bold">Project</p>
              </div>
              <div>
                <div
                  className="radial-progress bg-primary text-primary-content border-4 border-primary"
                  style={{ value: 85 }}
                >
                  85%
                </div>
                <p className="font-bold">Creativity</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full lg:max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="font-bold text-center text-xl">Education </h2>
            <p className="text-lg">
              I have completed diploma Engineering at Kishoreganj Polytechnic
              Institute.2016-2020.Kishoreganj,Dhaka.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between  items-center gap-5 mt-6 h-full">
        <div className="w-full lg:w-50 ">
          <img className="lg:w-[90%] " src={contact} alt="" />
        </div>
        <div className="w-full lg:w-50  ">
          <h2 className="text-xl text-success font-bold">Mohammad Shariful</h2>
          <h3 className="text-lg  font-semibold">Web Developer</h3>
          <p className="flex items-center">
            <FaEnvelope className="text-primary mr-2" />
            <span className="font-bold">Email</span> :
            mohammadsharifulislam64@gmail.com
          </p>
          <p className="flex items-center">
            <FaPhone className="text-primary mr-2" />
            <span className="font-bold">Phone</span> : 01735841876
          </p>
          <p className="flex items-center">
            <FaSearchLocation className="text-primary mr-2" />
            <span className="font-bold">Location</span> : Dhaka,Bangladesh
          </p>
          <ul className="list-none flex items-center gap-3 mt-2">
            <li>
              <a href="https://www.facebook.com/mohammadsharifulislam64/">
                <FaFacebook className="text-2xl text-blue-500" />
              </a>
            </li>
            <li>
              <a href="https://github.com/mohammadshariful">
                <FaGithub className="text-2xl text-blue-500" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mohammad-shariful-islam-91571423b/">
                <FaLinkedin className="text-2xl text-blue-500" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
