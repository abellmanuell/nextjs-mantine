import clsx from "clsx";

type PassportProps = {
  surname: string;
  firstname: string;
  passport_url?: string;
  width?: string;
  height?: string;
  className?: string;
};

export default function Passport({
  surname,
  firstname,
  passport_url,
  className,
}: PassportProps) {
  return (
    <img
      className={clsx("rounded-full object-cover", className)}
      src={
        !passport_url
          ? `https://api.dicebear.com/7.x/bottts/svg?seed=${surname}`
          : passport_url
      }
      alt={surname + " " + firstname}
    />
  );
}
