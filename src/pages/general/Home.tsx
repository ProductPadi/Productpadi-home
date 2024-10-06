import { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { FaSpinner } from "react-icons/fa";

import demoImage1 from "../../assets/demo1.svg";
import demoImage2 from "../../assets/demo2.svg";
import demoImage3 from "../../assets/demo3.svg";

import featureIcon1 from "../../assets/feature-icon1.svg";
import featureIcon2 from "../../assets/feature-icon2.svg";
import featureIcon3 from "../../assets/feature-icon3.svg";
import featureIcon4 from "../../assets/feature-icon4.svg";

import heroVector1 from "../../assets/hero-vector1.svg";
import heroVector2 from "../../assets/hero-vector2.svg";
import heroVector3 from "../../assets/hero-vector3.svg";

import box from "../../assets/box.svg";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../../components/ui/Modal";
import { calculateTimeLeft } from "../../utils/timer";
import { useLocation } from "react-router-dom";
import Footer from "../../components/layout/Footer";

// Define the shape of the form data
interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

interface FormData2 {
  name: string;
  email: string;
}

const Home = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [formData2, setFormData2] = useState<FormData2>({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your target date here
  const targetDate = new Date("2024-12-15T23:59:59");


  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft(targetDate));
    };

    // Initial call
    updateTimer();

    // Update timer every second
    const intervalId = setInterval(updateTimer, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.state?.scrollTo === 'contact') {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    if (location.state?.scrollTo === 'home') {
      ref3.current?.scrollIntoView({ behavior: 'smooth' });
    }

    if (location.state?.scrollTo === 'features') {
      ref2.current?.scrollIntoView({ behavior: 'smooth' });
    }

    if (location.state?.scrollTo === 'about') {
      ref1.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle form input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange2 = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    if (!formData.firstname || formData.firstname == "" || formData.firstname == " ") {
      toast.error("Please fill in your firstname");
      setLoading(false);
      return;
    } else if (!formData.lastname || formData.lastname == "" || formData.lastname == " ") {
      toast.error("Please fill in your lastname");
      setLoading(false);
      return;
    } else if (!formData.message || formData.message == "" || formData.message == " ") {
      toast.error("Please fill in your message");
      setLoading(false);
      return;
    } else if (
      !formData.email.trim() ||
      formData.email == "" ||
      formData.email == " "
    ) {
      toast.error("Please fill in your email");
      setLoading(false);
      return;
    } else if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://sheetdb.io/api/v1/5reb20jb9zpdd",
        {
          Firstname: formData.firstname,
          Lastname: formData.lastname,
          Email: formData.email,
          Message: formData.message,
        }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Data submitted successfully!");
        setFormData({ firstname: "", lastname: "", email: "", message: "" });
        closeModal();
      } else {
        toast.error("Failed to submit data");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle form submission
  const handleSubmit2 = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    if (!formData2.name || formData2.name == "" || formData2.name == " ") {
      toast.error("Please fill in your name");
      setLoading(false);
      return;
    } else if (
      !formData2.email.trim() ||
      formData2.email == "" ||
      formData2.email == " "
    ) {
      toast.error("Please fill in your email");
      setLoading(false);
      return;
    } else if (!emailRegex.test(formData2.email)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://sheetdb.io/api/v1/6mk4o1ecuwxio",
        {
          Name: formData2.name,
          Email: formData2.email,
        }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Sent successfully!");
        setFormData2({ name: "", email: "" });
        closeModal();
      } else {
        toast.error("Failed to submit data");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="text-center h-[90vh] flex items-center justify-center relative" id="home" ref={ref3}>
        <div className="w-[90%] max-w-[500px] mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Enhance Your Product Management Journey
          </h1>

          <p className="text-gray-600 mb-8">
            Join our wait-list today to be Among the First to Experience
            Product padi, get access and discover the future of product management.
          </p>

          <button
            className="btn primary-btn bg-[var(--primary-color)] py-2 px-4 text-white rounded-2xl"
            onClick={openModal}
          >
            Join Waitlist
          </button>

          <div className="mt-10 flex items-center justify-between">
            <div>
              <p className="text-4xl font-bold text-gray-800">
                {timeLeft.days.toString().padStart(2, "0")}
              </p>
              <p className="text-gray-600">Days</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-gray-800">
                {timeLeft.hours.toString().padStart(2, "0")}
              </p>
              <p className="text-gray-600">Hours</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-gray-800">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </p>
              <p className="text-gray-600">Minutes</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-gray-800">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </p>
              <p className="text-gray-600">Seconds</p>
            </div>
          </div>
        </div>

        <div className="absolute left-[-20%] top-[-25%] md:left-[10%] md:top-[5%]">
          <img src={heroVector1} alt="" className="" />
        </div>

        <div className="hidden md:block absolute right-[-15%] top-[25%] md:right-[15%] md:top-[30%]">
          <img src={heroVector2} alt="" className="" />
        </div>

        <div className="absolute left-[20%] bottom-[2%] md:bottom-[15%]">
          <img src={heroVector3} alt="" className="" />
        </div>
      </section>

      <section className="bg-[#E4EFE7] text-center min-h-[100vh] flex items-center justify-center px-4 py-8 md:p-8 lg:px-[5%]">
        <div>
          <span className="bg-white text-blue-400 w-auto py-2 px-4 rounded-2xl">
            PRODUCT DEMO
          </span>

          <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-12">
            Unlocking the Power of PRDs
          </h1>

          <p className="text-gray-600">
            Leverage Product padi to transform Product Requirements into Actionable
            Insights and Strategic Decisions.
          </p>

          <div className="bg-[#F5F1FE] p-4 md-p-8 rounded-lg  md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 mt-8">
            <img
              src={demoImage1}
              className="w-full h-[100%] mb-4 object-cover rounded-xl"
              alt="product demo"
            />
            <img
              src={demoImage2}
              className="w-full h-[100%] mb-4 object-cover rounded-xl"
              alt="product demo"
            />
            <img
              src={demoImage3}
              className="w-full h-[100%] mb-4 object-cover rounded-xl"
              alt="product demo"
            />
          </div>
        </div>
      </section>

      <section className="min-h-[60vh] flex items-center justify-center py-[5%]" id="features" ref={ref2}>
        <div className=" w-[90%] md;">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">
            Key Features
          </h1>
          <p className="text-gray-600 max-w-[500px]">
            Discover the powerful features that will revolutionize your product
            management workflow.
          </p>

          <div className="mt-8 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[var(--secondary-color)] py-5 px-3 rounded-3xl flex items-center gap-4 mb-6">
              <div>
                <img
                  src={featureIcon1}
                  className="border border-black rounded-full w-[100px]"
                  alt="feature icon"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">PRD</h4>
                <small className="text-gray-600">
                  Product requirement document (PRD) generator / Analysis.
                </small>
              </div>
            </div>

            <div className="bg-[var(--secondary-color)] py-5 px-3 rounded-3xl flex items-center gap-4 mb-6">
              <div>
                <img
                  src={featureIcon2}
                  className="border border-black rounded-full w-[100px]"
                  alt="feature icon"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">
                  Flowcharts and workflows
                </h4>
                <small className="text-gray-600">
                  Create Intuitive flowchart and Visualization of product
                  workflows
                </small>
              </div>
            </div>

            <div className="bg-[var(--secondary-color)] py-5 px-3 rounded-3xl flex items-center gap-4 mb-6">
              <div>
                <img
                  src={featureIcon3}
                  className="rounded-full w-[150px] md:w-[150px]"
                  alt="feature icon"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">
                  Milestone Generation
                </h4>
                <small className="text-gray-600">
                  Set clear goals, prioritize wild numbers of features, and
                  create strategic roadmaps with ease.
                </small>
              </div>
            </div>

            <div className="bg-[var(--secondary-color)] py-5 px-3 rounded-3xl flex items-center gap-4 mb-6">
              <div>
                <img
                  src={featureIcon4}
                  className="w-[150px] rounded-full "
                  alt="feature icon"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">
                  Wireframe Generation
                </h4>
                <small className="text-gray-600">
                  Set clear goals, prioritize wild numbers of features, and
                  create strategic roadmaps with ease.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--secondary-color)] p-[5%]" id="about" ref={ref1}>
        <div>
          <h1 className="text-4xl text-gray-800 font-bold mb-4">
            Why use Product padi
          </h1>
          <p className="text-gray-800">
            Everything you need to know about Product padi
          </p>

          <div className="mt-8 md:grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 px-4 py-6 rounded-lg mb-6">
              <img
                src={box}
                className="w-[20px] h-[20px] object-cover rounded-xl"
                alt="box"
              />

              <h3 className="mt-4 text-xl text-gray-800 font-bold mb-2">
                About Product padi
              </h3>

              <p className="text-gray-600">
                Product padi is an upcoming comprehensive product management
                software designed to streamline and enhance every aspect of your
                product development journey. Product padi is your all-in-one
                solution for product management success.
              </p>
            </div>

            <div className="border border-gray-800 px-4 py-6 rounded-lg mb-6">
              <img
                src={box}
                className="w-[20px] h-[20px] object-cover rounded-xl"
                alt="box"
              />

              <h3 className="mt-4 text-xl text-gray-800 font-bold mb-2">
                User-Centric Design{" "}
              </h3>

              <p className="text-gray-600">
                Product padi is designed with you in mind. Our user-centric approach
                ensures that the platform is not only feature-rich but also
                incredibly intuitive. We believe that a user-friendly interface
                is essential for effective product management.
              </p>
            </div>

            <div className="border border-gray-800 px-4 py-6 rounded-lg mb-6">
              <img
                src={box}
                className="w-[20px] h-[20px] object-cover rounded-xl"
                alt="box"
              />

              <h3 className="mt-4 text-xl text-gray-800 font-bold mb-2">
                Your Partner in Success
              </h3>

              <p className="text-gray-600">
                Product padi is more than just software, we're your committed
                partner in success. We provide unwavering support, robust
                training, and continuous improvement to help you achieve your
                goals effectively.
              </p>
            </div>

            <div className="border border-gray-800 px-4 py-6 rounded-lg mb-6">
              <img
                src={box}
                className="w-[20px] h-[20px] object-cover rounded-xl"
                alt="box"
              />

              <h3 className="mt-4 text-xl text-gray-800 font-bold mb-2">
                Powerful Features
              </h3>

              <p className="text-gray-600">
                Product padi offers a holistic approach to product management. We
                bring together a suite of powerful tools and features that cover
                every aspect of your product's lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-[5%] py-[20%] md:p-[5%] flex items-center justify-center min-h-[70vh]"
        id="contact"  ref={ref}
      >
        <div className="max-w-[500px]  m-auto w-[90%]">
          <form onSubmit={handleSubmit}>
            <div className="md:grid md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="border border-gray-400 bg-[var(--secondary-color)] block rounded-md p-1 mt-1 w-full"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="border border-gray-400 bg-[var(--secondary-color)] block rounded-md p-1 mt-1 w-full"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="border border-gray-400 bg-[var(--secondary-color)] block rounded-md p-1 mt-1 w-full"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="">Message</label>

              <textarea
                className="border border-gray-400 bg-[var(--secondary-color)] block rounded-md p-1 mt-1 w-full"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mt-12">
              <button className="btn primary-btn bg-[var(--primary-color)] py-2 px-4 text-white rounded-3xl w-full">
                {loading ? (
                  <span className="flex items-center justify-center">
                    <FaSpinner className="animate-spin mr-2" /> Submitting...
                  </span>
                ) : (
                  " Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer openModal={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Signup for the waitlist</h2>
        <div className="max-w-[500px]  m-auto w-[95%]">
          <form onSubmit={handleSubmit2}>
            <div className="mb-4">
              <div className="mb-4">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="border border-gray-400 bg-[var(--secondary-color)] block rounded-md p-1 mt-1 w-full"
                  name="name"
                  value={formData2.name}
                  onChange={handleChange2}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="border border-gray-400 bg-[var(--secondary-color)] block rounded-md p-1 mt-1 w-full"
                name="email"
                value={formData2.email}
                onChange={handleChange2}
              />
            </div>

            <div className="mt-12">
              <button className="btn primary-btn bg-[var(--primary-color)] py-2 px-4 text-white rounded-3xl w-full">
                {loading ? (
                  <span className="flex items-center justify-center">
                    <FaSpinner className="animate-spin mr-2" /> Submitting...
                  </span>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </div>
          </form>

          {/* <button
          onClick={closeModal}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Close Modal
        </button> */}
        </div>
      </Modal>
    </div>
  );
};

export default Home;
