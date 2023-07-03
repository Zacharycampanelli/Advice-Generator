const Advice = ({ adviceText, adviceId }) => {

  return (
    <div>
      <p>ADVICE # {adviceId}</p>
      <h2>
        {' '}
        &quot;
        {adviceText}
        &quot;
      </h2>
    </div>
  );
};

export default Advice;
