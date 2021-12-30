import Section from "components/Section";
import React from "react";

const Home = () => {
  const items = [
    {
      id: 1,
      title: "Top 50 yerli",
      description: "original",
      image:
        "https://fizy.com/assets/img/cover/Phil-Collins-Dance-Into-The-Light.png",
      type: "album",
      src: "https://freesound.org/data/previews/613/613167_2061858-lq.mp3",
      artist: "Mehmet Erdem",
    },
    {
      id: 2,
      title: "Top 50 yerli",
      description: "original",
      image: "https://fizy.com/assets/img/cover/aya-nakaruma.png",
      type: "album",
      src: "https://freesound.org/data/previews/612/612673_11861866-lq.mp3",
      artist: "İsmail YK",
    },
    {
      id: 3,
      title: "Top 50 yerli",
      description: "original",
      image: "https://fizy.com/assets/img/cover/yerli.png",
      type: "artist",
      src: "https://freesound.org/data/previews/612/612955_2244250-lq.mp3",
      artist: "İbrahim Tatlıses",
    },
    {
      id: 4,
      title: "Top 50 yerli",
      description: "original",
      image: "https://fizy.com/assets/img/cover/album-1.png",
      type: "podcast",
      src: "https://freesound.org/data/previews/612/612952_5674468-lq.mp3",
      artist: "Grup 84",
    },
    {
      id: 5,
      title: "Top 50 yerli",
      description: "original",
      image: "https://fizy.com/assets/img/cover/sia-music.png",
      type: "album",
      src: "https://freesound.org/data/previews/612/612887_3914271-lq.mp3",
      artist: "Duman",
    },
  ];
  return (
    <div className="grid gap-y-8">
      <Section title="Recently Played" more="blabla" items={items} />
      <Section title="Shows to try" more="blabla" items={items} />
      <Section title="Made for Eyodohan" more="blabla" items={items} />
    </div>
  );
};

export default Home;
