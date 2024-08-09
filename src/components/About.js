import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import pfp from "../about.jpg";
const features = [
  {
    name: "Age:",
    description: "26 years",
    icon: CalendarIcon,
  },
  {
    name: "Email:",
    description: "Kavithakrisnakumar59@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Chennai, India",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7">Get to know more</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-3xl">
                About Me
              </p>
              <p className="mt-6 text-sm leading-8 sm:text-1xl" data-aos="fade-right">
              I am a passionate Automation Tester with a deep understanding of software testing methodologies and a strong commitment to delivering high-quality products. 
              <br></br>
              <br></br>
              My experience spans across manual and automated testing lies in creating robust automated test frameworks, executing comprehensive test plans, and ensuring the seamless integration of new features into existing systems, I am proficient in using tools such as <b> Eclipse IDE, Postman, and Azure DevOps </b> to ensure comprehensive coverage and efficient testing cycles.
              </p>
               
              <p className="mt-6 text-sm leading-8 sm:text-1xl" data-aos="fade-right">
              In my current role at <b> VTS</b>, I am actively engaged in automating complex applications, from payroll systems to banking solutions. My responsibilities include writing and maintaining automated test scripts, analyzing test results, and collaborating with development teams to quickly address and resolve issues. The supportive and innovative culture at VTS allows me to push the boundaries of my skills and continuously improve our testing processes.

              I am driven by a desire to contribute to the creation of reliable, user-friendly software, and I am always exploring new techniques and tools to enhance my testing strategies.
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] ring-2 ring-base-30 max-w-none rounded-xl shadow-xl sm:w-[30rem]"
            src={pfp}
            alt="Person"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className="text-sm sm:text-2xl text-2xl text-center font-bold tracking-tight">
                  Experience
                </h2>
                <p className="text-sm sm:text-1xl mt-3 list-item list-inside">
                 Affiliated with VTS Software Company
                </p>
                <p className="text-sm sm:text-1xl mt-3 list-item list-inside">
                 Contributed to Quantum TCS for a duration of three months.
                </p>
                <p className="text-sm sm:text-1xl mt-3 list-item list-inside">
                 Engaged in a "Software Testing" course, with a strong emphasis on Automation and Manual Testing methodologies.
                </p>
              </div>
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className="text-sm sm:text-2xl text-2xl text-center font-bold tracking-tigh">
                  Education
                </h2>
                <p className="text-sm sm:text-1xl mt-3 list-item list-inside">
                MCA, VELS University with the CGPA of 7.91
                </p>
                <p className="text-sm sm:text-1xl mt-3 list-item list-inside">
                BSC, Anna Adarsh College for Women with the CGPA of 7.91 
                </p>
                <p className="text-sm sm:text-1xl mt-3 list-item list-inside">
                HSC, Govt Girls Hr Sec School Cheyyar with the percentage of 86.1
                </p>
              </div>
            </div>
            <dl
              className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
