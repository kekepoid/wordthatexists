import CopyToClipboard from "react-copy-to-clipboard";
import {FacebookShareButton, TelegramShareButton, TwitterShareButton} from "react-share";
import {SocialIcon} from "react-social-icons";
import {HASHTAG, TITLE} from "../config/constant";
import {TextWrapper} from "./component/TextWrapper";

export function App() {
    const currentUrl = window.location.href

    return (
        <div className={"container mx-auto max-w-max h-screen flex flex-col items-center justify-center"}>
            <p className={"text-xl text-neutral-100 font-light"}>СЛОВО, КОТОРОЕ ЕСТЬ</p>
            <p className={"mt-4 sm:mt-12 font-bold text-6xl sm:text-14xl  text-neutral-100"}>ВОЙНА</p>
            <div className={"mt-6 text-center w-11/12 sm:w-7/12 flex flex-col gap-2"}>
                <TextWrapper>
                    ПРАВИТЕЛЬСТВО РОССИИ УТВЕРЖДАЕТ, ЧТО ТАКОГО СЛОВА НЕТ. ОНИ ВСЕМИ СИЛАМИ СТАРАЮТСЯ СТЕРЕТЬ ЕГО ИЗ
                    НАШЕГО СОЗНАНИЯ, БЛОКИРУЯ СРЕДСТВА МАССОВОЙ ИНФОРМАЦИИ, СОЦИАЛЬНЫЕ СЕТИ, УГРОЖАЯ УГОЛОВНЫМ
                    ПРЕСЛЕДОВАНИЕМ КАЖДОМУ, КТО НАЗЫВАЕТ ВЕЩИ СВОИМИ ИМЕНАМИ.
                    НО ЭТО СЛОВО, КОТОРОЕ ЕСТЬ!
                </TextWrapper>
                <TextWrapper>И ВОЙНА ПРЯМО СЕЙЧАС ИДЁТ НА ТЕРРИТОРИИ УКРАИНЫ!</TextWrapper>
            </div>

            <p className={"mt-4 text-2xl text-neutral-100 font-light"}>
                РАССКАЖИ О НЁМ ВСЕМ<sup className={"font-bold"}>*</sup>
            </p>


            <CopyToClipboard text={`${currentUrl}\n\nСлово, которое есть`}>
                <button
                    className={"mt-2 text-base bg-neutral-800 hover:bg-neutral-700 transition text-neutral-100 px-3 pt-1 pb-1.5 rounded"}>
                    Скопировать адрес сайта
                </button>
            </CopyToClipboard>

            <div className={"mt-4 flex flex-row gap-4"}>
                <TwitterShareButton
                    url={currentUrl}
                    title={TITLE}
                    hashtags={[HASHTAG]}
                >
                    <SocialIcon network={"twitter"} fgColor={"#fff"}/>
                </TwitterShareButton>
                <FacebookShareButton
                    quote={TITLE}
                    hashtag={HASHTAG}
                    url={currentUrl}
                >
                    <SocialIcon network={"facebook"} fgColor={"#fff"}/>
                </FacebookShareButton>
                <TelegramShareButton url={currentUrl} title={TITLE}>
                    <SocialIcon network={"telegram"} fgColor={"#fff"}/>
                </TelegramShareButton>
            </div>
            <a href={"https://chrome.google.com/webstore/detail/слово-которое-есть/ejhnffahiiddjkogpheffbhgkmjeeakb"}>
                <button
                    className={"mt-4 sm:mt-4 text-xs sm:text-base bg-neutral-800 hover:bg-neutral-700 transition text-neutral-100 px-3 pt-1 pb-1.5 rounded"}>
                    Используй это расширение для чтения новостей
                </button>
            </a>
            <div className={"mt-2 sm:mt-4 p-4 font-bold"}>
                <TextWrapper><sup>*</sup>вас могут привлечь к ответственности за репост</TextWrapper>
            </div>

        </div>
    )
}

