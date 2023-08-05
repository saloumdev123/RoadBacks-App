import { tours } from "../data";
import Title from "./Title";
const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="features" subTitle="tours" />

        <div className="section-center featured-center">
          {tours.map((tour) => {
            const {
              id,
              icon,
              image,
              text,
              title,
              duration,
              date,
              location,
              cost,
            } = tour;
            return (
              <article className="tour-card">
                <div className="tour-img-container" key={id}>
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className={icon}></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{duration} days</p>
                    <p>from ${cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;
