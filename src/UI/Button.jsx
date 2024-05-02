const Button = ({ children, textOnly, className, ...props }) => {
  let cssClassnames = textOnly ? "text-button" : "button";
  cssClassnames += " " + className;
  return (
    <button className={cssClassnames} {...props}>
      {children}
    </button>
  );
};

export default Button;
