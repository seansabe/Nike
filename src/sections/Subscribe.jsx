import { Button } from "../components";

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Subscribe to our
        <span className="text-coral-red"> Newsletter</span> and
        <span className="text-coral-red"> Updates</span>
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-salte-gray rounded-full">
        <input type="email" name="" id="" placeholder="contoso@mail.com" className="input" />
        <div className="flex max:sm:justify-end items-center max-sm:w-full">
          <Button label="Subscribe" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
