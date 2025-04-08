const Input = (props) => {
  return (
    <div>
      <input
        style={{
          width: 364,
          height: 48,
          border: props.border,
          borderRadius: 4,
        }}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;

// const A = () => {
//   const gene = "sad";
//   return <div>A gene = {props.gene}</div>;
// };
