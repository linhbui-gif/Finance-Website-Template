const Flex = ({ children, className = '', ...rest }) => {
  return (
    <div className={`flex ${className}`} {...rest}>
      {children}
    </div>
  );
};
export default Flex;