export default function AddSave() {
  return (
    <div className="flex justify-center -m-11">
      <div className="w-12 h-12 mr-6">
        <img
          className="rounded-full border border-black overflow-hidden w-full h-full"
          src="https://cdn2.iconfinder.com/data/icons/email-117/128/200210-01-512.png"
        />
        <p className="text-center">Add</p>
      </div>
      <div className="w-12 h-12">
        <img
          className="rounded-full border border-black overflow-hidden w-full h-full object-contain"
          src="https://i.pinimg.com/originals/cc/cd/31/cccd311820e509964ce02c3b1a2a91ed.png"
        />
        <p className="text-center">Save</p>
      </div>
    </div>
  );
}
