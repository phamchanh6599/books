interface IBookCard {
  image: string;
  title: string;
  author: string;
  publishYears: string;
  keyOf: string;
  onClick: () => void;
}

const BookCard = ({
  image,
  title,
  author,
  publishYears,
  keyOf,
  onClick,
}: IBookCard) => {
  return (
    <div
      className='relative group cursor-pointer shadow md:w-96 border border-slate-300 hover:border-indigo-300 p-3 h-[500px] rounded-md'
      onClick={onClick}>
      <span className='invisible group-hover:visible absolute right-0 bg-white border border-gray-300 -top-8 text-xs p-2'>
        Click to copy <span className='font-semibold'>{keyOf}</span> to post
      </span>
      {/* Image  */}
      <div className='mb-2 flex h-80' data-tooltip-target='tooltip-card'>
        <img src={image} className='w-full object-fill' alt={image} />
      </div>

      {/* Content */}
      <div>
        <div className='font-semibold text-lg'>{title}</div>
        <div className='text-zinc-400'>{author}</div>
        <div className='text-zinc-400 truncate'>{publishYears}</div>
      </div>
    </div>
  );
};

export default BookCard;
