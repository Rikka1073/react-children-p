// こんな感じで実装した
export const Children = ({ children }) => {
  return <div>{children}</div>;
};

// こうのように個別にchildrenを受け取ることはできないのdか？
export const Children_2 = ({ text, number }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{number}</p>
    </div>
  );
};
