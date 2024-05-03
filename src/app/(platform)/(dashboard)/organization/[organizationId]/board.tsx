interface BoardProps {
  title: string;
  id: string;
}

export const Board = ({ title, id }: BoardProps) => {
  return <div>Board Title :{title}</div>;
};
