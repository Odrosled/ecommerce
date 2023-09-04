interface TextOverlayProps {
  text: string;
}

const TextOverlay = ({ text }: TextOverlayProps) => {
  return (
    <div className="flex items-end p-8 absolute top-0 left-0 w-full h-full bg-black bg-opacity-20">
      <p className="text-white text-3xl font-bold tracking-wider">{text}</p>
    </div>
  );
};

export default TextOverlay;
