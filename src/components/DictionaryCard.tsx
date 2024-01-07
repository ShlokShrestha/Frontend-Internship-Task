"use client";

import Image from "next/image";
import { Key, useRef, useState } from "react";

interface Definition {
  definition: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}
interface Phonetics {
  audio: string;
}
interface DataProps {
  data: {
    phonetic: string;
    meanings: Meaning[];
    definitions: Definition[];
    phonetics: Phonetics[];
  };
}
const DictionaryCard = ({ data }: DataProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>("noun");
  const toggleAudio = () => {
    if (audioRef.current?.pause) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <div className=" my-4 rounded-3xl p-5 border-solid border-2 border-gray-300">
        <div className="flex gap-2 items-center">
          <audio
            ref={audioRef}
            src={data.phonetics.find((phonetic) => phonetic.audio)?.audio}
          />
          <Image
            src={isPlaying ? "/pause.svg" : "/play.svg"}
            alt={isPlaying ? "pause" : "play"}
            width={40}
            height={40}
            onClick={toggleAudio}
          />
          <p>{data.phonetic}</p>
        </div>
        <div className="flex gap-3 mt-4 mb-2">
          <button
            className={`bg-gray-200 text-black px-3 rounded-md ${
              selectedTab === "noun" ? `active` : ""
            }`}
            onClick={() => setSelectedTab("noun")}
          >
            noun
          </button>
          <button
            className={`bg-gray-200 text-black px-3 rounded-md ${
              selectedTab === "verb" ? "active" : ""
            }`}
            onClick={() => setSelectedTab("verb")}
          >
            verb
          </button>
        </div>

        <div>
          {data &&
            data.meanings.map(
              (
                meaning: {
                  definitions: any;
                  partOfSpeech: string;
                },
                index: Key
              ) =>
                meaning.partOfSpeech === selectedTab && (
                  <div key={index}>
                    <ol className="list-decimal list-inside">
                      {meaning.definitions.map((def: any, index: number) => (
                        <li key={index} className="my-1">
                          {def.definition}
                        </li>
                      ))}
                    </ol>
                  </div>
                )
            )}
        </div>
      </div>
    </>
  );
};

export default DictionaryCard;
