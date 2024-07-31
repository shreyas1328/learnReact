import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { changeLanguage } from "../../redux/slice/languageSlice";
import { useTranslation } from "react-i18next";

export default function LangCheck() {
  const language = useAppSelector((state) => state.lang);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { t } = useTranslation();

  const onEnglish = (): void => {
    dispatch(changeLanguage("en"));
  };

  const onFrench = (): void => {
    dispatch(changeLanguage("fr"));
  };

  const onHome = (): void => {
    navigation("/");
  };

  return (
    <div>
      <b>Language</b>
      <br />
      <br />
      <p>Current language : {language.lang}</p>
      <br />
      <br />
      <br />
      <p>{t("greeting")}</p>
      <br />
      <p>{t("welcome")}</p>
      <br />
      <button onClick={onHome}>Home</button>
      <br />
      <button onClick={onEnglish}>English</button>
      <button onClick={onFrench}>French</button>
    </div>
  );
}
