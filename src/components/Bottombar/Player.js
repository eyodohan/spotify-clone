import React, { useEffect, useMemo } from "react";
import { BiShuffle } from "@react-icons/all-files/bi/BiShuffle";
import { BiSkipPrevious } from "@react-icons/all-files/bi/BiSkipPrevious";
import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill";
import { AiOutlinePause } from "@react-icons/all-files/ai/AiOutlinePause";
import { BiSkipNext } from "@react-icons/all-files/bi/BiSkipNext";
import { FiRepeat } from "@react-icons/all-files/fi/FiRepeat";
import { GiLyre } from "@react-icons/all-files/gi/GiLyre";
import { MdQueueMusic } from "@react-icons/all-files/md/MdQueueMusic";
import { MdDevices } from "@react-icons/all-files/md/MdDevices";
import { IoMdVolumeHigh } from "@react-icons/all-files/io/IoMdVolumeHigh";
import { AiOutlineFullscreen } from "@react-icons/all-files/ai/AiOutlineFullscreen";
import { BsVolumeMute } from "@react-icons/all-files/bs/BsVolumeMute";
import { IoMdVolumeLow } from "@react-icons/all-files/io/IoMdVolumeLow";
import { ImVolumeHigh } from "@react-icons/all-files/im/ImVolumeHigh";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { RiPictureInPictureExitLine } from "@react-icons/all-files/ri/RiPictureInPictureExitLine";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import { useAudio } from "react-use";
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setControls, setPlaying, setSidebar } from "stores/player";

const Player = () => {
  const dispatch = useDispatch();
  const { current, sidebar } = useSelector((state) => state.player);
  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });
  console.log(current);
  console.log(controls);
  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return <BsVolumeMute />;
    if (state.volume > 0 && state.volume < 0.33) return <IoMdVolumeLow />;
    if (state.volume >= 0.33 && state.volume < 0.66) return <IoMdVolumeHigh />;
    return <ImVolumeHigh />;
  }, [state.volume, state.muted]);

  return (
    <div className="flex justify-between items-center h-full px-4">
      <div className="min-w-[11.25rem] w-[30%] ">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              {!sidebar && (
                <div className="w-14 h-14 mr-3 flex-shrink-0 group relative">
                  <img src={current.image} />
                  <button
                    onClick={() => dispatch(setSidebar(true))}
                    className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:scale-[1.06] hover:!opacity-100 flex items-center justify-center rounded-full absolute top-1 right-1"
                  >
                    <IoIosArrowUp />
                  </button>
                </div>
              )}
              <div>
                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                <p className="text-[0.688rem] text-white text-opacity-70">
                  {current.artist}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <AiOutlineHeart />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <RiPictureInPictureExitLine />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center max-w-[45.125rem] pt-2 px-4 w-[40%]">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <BiShuffle />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <BiSkipPrevious className="w-20 h-20" />
          </button>

          <button
            className="w-8 h-8 flex items-center bg-white justify-center text-black rounded-full hover:scale-[1.06]"
            onClick={controls[state?.playing ? "pause" : "play"]}
          >
            {state?.playing ? <AiOutlinePause /> : <BsFillPlayFill />}
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <BiSkipNext className="w-20 h-20" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <FiRepeat />
          </button>
        </div>
        <div className="w-full flex items-center mt-1.5 gap-x-2">
          {audio}
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <GiLyre />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <MdQueueMusic />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <MdDevices />
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          {volumeIcon}
        </button>
        <div className="w-[5.813rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.volume(value);
              controls.unmute();
            }}
          />
        </div>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <AiOutlineFullscreen />
        </button>
      </div>
    </div>
  );
};

export default Player;

// AiOutlineFullscreen
// RiPictureInPictureExitLine
// AiOutlineHeart
// BsVolumeMute
// IoVolumeLowOutline
// IoVolumeMediumOutline
// IoVolumeHighOutline
// GiLyre
