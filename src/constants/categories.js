const categories = [
  { name: "From Insurance" },
  { name: "From MITDC" },
  { name: "From Ron's BU" },
  { name: "From ES" },
  { name: "From MU" },
  { name: "From Bank" },
  { name: "From GB" },
  { name: "Someone from outside Metro Manila" },
  { name: "Someone you haven’t talked to before" },
  { name: "Someone not in IT" },
  { name: "A Fresh Grad" },
  { name: "A 2022 Hire (Welcome to CDT!)" },
  { name: "Basketball Player" },
  { name: "KDrama Addict" },
  { name: "A Hardcore Gamer" },
  { name: "Plays an Instrument" },
  { name: "A Manager/Leader" },
  { name: "A Tall Person" },
  { name: "Solid DOTA Player" },
  { name: "Owns 2 or more pets" },
  { name: "Anime Fan" },
  { name: "Mahilig Humugot" },
  { name: "Single" },
  { name: "Has Kids" },
  { name: "Best Dressed" },
];

const formattedCategories = categories.map((item, index) => ({
  ...item,
  id: index,
}));

export default formattedCategories;
