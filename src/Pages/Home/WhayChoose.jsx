import Button from "./Button";

const WhayChoose = () => {
  return (
    <section className="max-w-screen-2xl container mx-auto py-6 px-4">
      <div className="my-24 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-4xl font-bold">
            Why <br /> Choosing Us
          </h2>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Luxury facilities</h3>
          <p>
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
          <Button text="More Info" />
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Affordable prices</h3>
          <p>
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
          <Button text="More Info" />
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Many Choises</h3>
          <p>
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
          <Button text="More Info" />
        </div>
      </div>
    </section>
  );
};

export default WhayChoose;
