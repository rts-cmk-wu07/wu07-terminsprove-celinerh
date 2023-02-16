import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useToken } from "../contexts/TokenContext";
import useAsset from "../hooks/useAsset";
import useClass from "../hooks/useClass";

function ClassDetails() {
  const { token } = useToken();

  const navigate = useNavigate();
  const { gymClass, error, isPending } = useClass();
  const {
    asset,
    error: assetError,
    isPending: assetIsPending,
  } = useAsset(gymClass?.trainer.assetId);

  if (!gymClass && !isPending) {
    navigate("/404");
  }

  const titleSize =
    gymClass?.className.length > 20
      ? "text-medium leading-10"
      : "text-large leading-[4rem]";

  return (
    <div className="h-full">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {gymClass && (
        <>
          <div className="grid grid-rows-1 grid-cols-1 h-1/2">
            <img
              className="row-span-full col-span-full h-full w-full object-cover"
              src={gymClass.asset.url}
              alt={`${gymClass.className} workout class`}
              title={`${gymClass.className} workout class`}
            />
            <Navigation
              className="row-span-full col-span-full py-7 px-6 bg-black bg-opacity-30 h-fit"
              goBack
            />
            <div className="row-span-full col-span-full flex gap-2 items-end pl-4 pb-4 h-fit place-self-end bg-black bg-opacity-30 w-full">
              <p className={`${titleSize} text-white`}>{gymClass.className}</p>
              {token && (
                <button className="button whitespace-nowrap">Sign up</button>
              )}
            </div>
          </div>
          <div className="h-1/2 px-6 py-4 flex flex-col gap-6">
            <div>
              <p className="text-small">Schedule</p>
              <div className="flex justify-between">
                <p>{gymClass.classDay}</p>
                <p>{gymClass.classTime}</p>
              </div>
            </div>
            <p>{gymClass.classDescription}</p>
            <div>
              <p className="text-small">Trainer</p>
              <div className="flex gap-6">
                <img
                  className="h-24 w-20 object-cover rounded-lg"
                  src={
                    asset?.url ??
                    "data:image/jpeg;base64,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"
                  }
                  alt={gymClass.trainer.trainerName}
                  title={gymClass.trainer.trainerName}
                />
                <p>{gymClass.trainer.trainerName}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ClassDetails;
