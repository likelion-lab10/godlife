import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <IoChevronBackOutline className="text-2xl" onClick={() => navigate(-1)} />
    </>
  );
};
export default BackButton;
