import { useTranslation } from "next-i18next";

export const DownloadModal = ({ setShowModal }) => {
  const { t } = useTranslation("editor");

  <>
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={() => setShowModal(false)}
        >
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          ></span>

          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 ob-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <p className="text-7xl text-center">!!</p>
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {t("download-readme-generated")}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {t("download-reach-out")}{" "}
                    <a
                      href="https://twitter.com/kuluruvineeth"
                      target="__blank"
                      className="text-green-500 hover:text-green-400"
                    >
                      Twitter
                    </a>{" "}
                    {t("download-feedback")}
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    {t("download-cofee")}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 mx-auto flex justify-center">
              <a></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};
