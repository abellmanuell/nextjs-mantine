import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="sm:hidden" onClick={() => navigate(-1)}>
      <ArrowLongLeftIcon className="size-6" />
    </button>
  );
}
