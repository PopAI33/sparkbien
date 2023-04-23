import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const CompareSlider = ({
  original,
  restored,
}: {
  original: string;
  restored: string;
}) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage className="object-center" src={original} alt="original photo" />}
      itemTwo={<ReactCompareSliderImage className="object-center"  src={restored} alt="generated photo" />}
      portrait
      className="flex w-[600px] mt-5 h-96"
    />
  );
};
