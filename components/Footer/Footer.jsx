import styled from 'styled-components';
import Container from '../UI/Container';
import FooterBox from './FooterBox';

function Footer() {

    return (
        <FooterStyle>
            <Container>
                <div className="top">
                    <FooterBox />
                    <div className="informations-container">
                        <h4 className="title">Информация</h4>
                        <div className="informations-container__item">
                            <i>
                                <svg width="12" height="17" viewBox="0 0 12 17" fill="none" >
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 16.5C6 16.5 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 6 16.5 6 16.5ZM6 8.8C7.5464 8.8 8.8 7.5464 8.8 6C8.8 4.4536 7.5464 3.2 6 3.2C4.4536 3.2 3.2 4.4536 3.2 6C3.2 7.5464 4.4536 8.8 6 8.8Z" fill="white" />
                                </svg>
                            </i>
                            <p>Пл. Декабристов, 7</p>
                        </div>
                        <div className="informations-container__item">
                            <i>
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9771 8.52392C10.946 8.43016 10.7481 8.29204 10.3834 8.10989C10.2846 8.05248 10.1438 7.97445 9.96166 7.87547C9.77934 7.77649 9.61386 7.68528 9.46551 7.60192C9.31685 7.51859 9.17759 7.43786 9.04746 7.35983C9.02666 7.34421 8.96156 7.2987 8.85217 7.223C8.74268 7.14753 8.65035 7.09151 8.57468 7.05497C8.49918 7.01866 8.4249 7.00038 8.35197 7.00038C8.24782 7.00038 8.11772 7.07465 7.96151 7.223C7.8053 7.37155 7.66201 7.5329 7.53186 7.70755C7.40168 7.88212 7.26361 8.04347 7.11792 8.19193C6.972 8.34045 6.85211 8.41464 6.75846 8.41464C6.71145 8.41464 6.65283 8.40153 6.58258 8.37567C6.51236 8.34965 6.45894 8.32734 6.42227 8.30936C6.38592 8.291 6.32356 8.25466 6.23494 8.19979C6.14617 8.14508 6.0968 8.11512 6.0864 8.10989C5.37282 7.71393 4.76083 7.26074 4.25031 6.75044C3.73996 6.23984 3.28672 5.6279 2.89087 4.91425C2.88567 4.90382 2.85564 4.85431 2.80099 4.76581C2.74626 4.67723 2.70978 4.6148 2.69156 4.57824C2.67333 4.54182 2.65119 4.4884 2.62519 4.4181C2.5992 4.34779 2.58614 4.28923 2.58614 4.24229C2.58614 4.14859 2.66039 4.02873 2.80885 3.88287C2.95728 3.73709 3.1188 3.599 3.29323 3.46887C3.4678 3.33874 3.62915 3.19545 3.77764 3.03925C3.92608 2.88296 4.00029 2.7528 4.00029 2.64865C4.00029 2.57577 3.98207 2.50147 3.94564 2.42597C3.90919 2.3503 3.8532 2.25797 3.77764 2.14853C3.70206 2.03914 3.65649 1.97409 3.64084 1.95316C3.56279 1.82303 3.48214 1.68371 3.3987 1.53525C3.31526 1.38681 3.22419 1.22136 3.12518 1.03907C3.02625 0.856866 2.94817 0.716176 2.89081 0.617219C2.70861 0.252673 2.5706 0.0546505 2.47681 0.0235076C2.44033 0.00788149 2.3856 0 2.31275 0C2.17203 0 1.98846 0.025998 1.7619 0.0781581C1.53525 0.130236 1.3569 0.184859 1.22667 0.242246C0.966222 0.351575 0.690178 0.669297 0.398453 1.1953C0.132809 1.68483 0 2.16935 0 2.64851C0 2.78904 0.00911297 2.92576 0.0273389 3.0587C0.0455649 3.19151 0.0781307 3.34129 0.125064 3.508C0.171915 3.67466 0.209708 3.79847 0.238278 3.87909C0.266876 3.95977 0.320268 4.10429 0.398426 4.31271C0.476474 4.52108 0.523408 4.64863 0.539034 4.69551C0.721321 5.206 0.937487 5.66173 1.18748 6.06284C1.59879 6.72954 2.1601 7.41854 2.87108 8.12957C3.58208 8.84054 4.27095 9.40183 4.9377 9.81331C5.33875 10.0633 5.79465 10.2794 6.30506 10.4618C6.35196 10.4774 6.47952 10.5242 6.6878 10.6025C6.89617 10.6806 7.04074 10.734 7.12142 10.7627C7.20212 10.7913 7.32596 10.8292 7.49248 10.8761C7.65936 10.923 7.809 10.9556 7.94181 10.974C8.0747 10.9919 8.21145 11.0012 8.352 11.0012C8.83113 11.0012 9.31568 10.8683 9.80529 10.6027C10.3312 10.3111 10.6489 10.035 10.7583 9.77436C10.8158 9.64426 10.8703 9.46586 10.9224 9.23922C10.9746 9.01268 11.0005 8.82913 11.0005 8.68844C11.0007 8.61529 10.9928 8.5607 10.9771 8.52392Z" fill="#ffffff" />
                                </svg>

                            </i>
                            <p>+7 961 812 4245</p>
                        </div>
                        <div className="informations-container__item">
                            <i>
                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5938 0H1.4063C1.18983 0 0.987177 0.0465665 0.803833 0.12332L7.9688 6.39267L9.57471 5.04224C9.57471 5.04224 9.57483 5.04211 9.57486 5.04205C9.57489 5.042 9.57502 5.04194 9.57502 5.04194L15.1965 0.12343C15.0131 0.0466211 14.8103 0 14.5938 0Z" fill="#FBEDE6" />
                                    <path d="M15.8592 0.703613L10.5691 5.3322L15.859 9.96087C15.9467 9.80044 15.9999 9.62312 15.9999 9.43371V1.23058C15.9999 1.04128 15.9468 0.863984 15.8592 0.703613Z" fill="#FBEDE6" />
                                    <path d="M0.140937 0.703125C0.0532188 0.863551 0 1.04088 0 1.23029V9.43341C0 9.62271 0.0531562 9.80006 0.140812 9.96043L5.43091 5.33185L0.140937 0.703125Z" fill="#FBEDE6" />
                                    <path d="M9.90634 5.91216L8.30021 7.26275C8.20865 7.34287 8.08871 7.38293 7.96881 7.38293C7.8489 7.38293 7.72893 7.34287 7.6374 7.26275L6.09378 5.91211L0.803589 10.5407C0.986964 10.6175 1.18975 10.6642 1.40628 10.6642H14.5938C14.8102 10.6642 15.0129 10.6176 15.1962 10.5408L9.90634 5.91216Z" fill="#FBEDE6" />
                                </svg>


                            </i>
                            <p>arthouse30@yandex.ru</p>
                        </div>
                        <div className="link-wraper">
                            <a className='instagram' href='https://www.instagram.com/arthouse_30/' target={"_blank"} rel="noreferrer">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4364 4.58643H6.57331C5.47799 4.58643 4.58667 5.47769 4.58667 6.57306V13.4361C4.58667 14.5317 5.47799 15.423 6.57331 15.423H13.4364C14.5319 15.423 15.4232 14.5317 15.4232 13.4361V6.57306C15.4232 5.47774 14.5319 4.58643 13.4364 4.58643ZM10.0047 13.572C8.03788 13.572 6.43747 11.9716 6.43747 10.0045C6.43747 8.03763 8.03788 6.43723 10.0047 6.43723C11.9718 6.43723 13.5722 8.03763 13.5722 10.0045C13.5722 11.9716 11.9718 13.572 10.0047 13.572ZM13.687 7.1749C13.2213 7.1749 12.8427 6.79625 12.8427 6.33086C12.8427 5.86541 13.2213 5.48676 13.687 5.48676C14.1524 5.48676 14.531 5.86541 14.531 6.33086C14.531 6.79631 14.1524 7.1749 13.687 7.1749Z" fill="#FBEDE6" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0049 7.94482C8.86946 7.94482 7.94482 8.86902 7.94482 10.0045C7.94482 11.1404 8.86946 12.0648 10.0049 12.0648C11.1408 12.0648 12.0648 11.1404 12.0648 10.0045C12.0648 8.86902 11.1408 7.94482 10.0049 7.94482Z" fill="#FBEDE6" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0V20.0099H20.0099V0H0ZM16.9305 13.4365C16.9305 15.3634 15.3634 16.9305 13.4365 16.9305H6.5734C4.64668 16.9305 3.07932 15.3634 3.07932 13.4365V6.5734C3.07932 4.64668 4.64668 3.07932 6.5734 3.07932H13.4365C15.3634 3.07932 16.9305 4.64668 16.9305 6.5734V13.4365Z" fill="#FBEDE6" />
                                </svg>
                            </a>
                            <a href='https://www.facebook.com/arthouse30/' target={"_blank"} rel="noreferrer">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.569336 0V20.0099H11.2258V12.2805H8.62078V9.12511H11.2258V6.47518C11.2258 4.54796 12.7881 2.98565 14.7153 2.98565H17.4387V5.82302H15.49C14.8776 5.82302 14.3812 6.31948 14.3812 6.93186V9.12516H17.3897L16.9739 12.2805H14.3812V20.0099H20.5792V0H0.569336Z" fill="#FBEDE6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <FooterBottom>
                    <p>© 2020 Все права защищены</p>


                    <a href="https://bzcekh.ru/" alt="Маркетинговое агентство «Бизнес Цех»" title="Заказать интернет сайт, интернет магазин в Астрахани" target="_blank">

                        <svg width="103" height="50" viewBox="0 0 103 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M63.3182 36.4696H56.8447V27.7334H57.7237V35.65H61.7562V27.7334H62.6352V35.65H64.1318V37.7761H63.3182V36.4696ZM65.4681 27.7334H70.4746V28.5946H66.3411V31.3265H70.4389V32.1817H66.3411V35.6084H70.4389V36.4696H65.4681V27.7334ZM71.5198 27.7334H72.5413L74.6318 31.1424L76.7401 27.7334H77.7497L75.1485 31.9679L77.922 36.4696H76.9005L74.6318 32.8053L72.3513 36.4696H71.3298L74.1151 31.9679L71.5198 27.7334Z" fill="white" />
                            <path d="M56.834 23.8846V15.1484H61.211V16.0096H57.6951V18.8009H58.1049C59.1937 18.8009 59.9836 18.8979 60.4746 19.0919C60.9695 19.2819 61.3575 19.5848 61.6386 20.0005C61.9237 20.4123 62.0662 20.8716 62.0662 21.3783C62.0662 22.0435 61.8168 22.6275 61.3179 23.1303C60.819 23.6332 60.1242 23.8846 59.2333 23.8846H56.834ZM57.6951 19.6798V23.0294H58.7701C59.4075 23.0294 59.8747 22.968 60.1717 22.8453C60.4686 22.7186 60.7042 22.5265 60.8784 22.2692C61.0566 22.0079 61.1457 21.7169 61.1457 21.3962C61.1457 20.9923 61.0209 20.6498 60.7715 20.3687C60.5221 20.0876 60.2113 19.9035 59.8391 19.8164C59.4669 19.7253 58.9146 19.6798 58.1821 19.6798H57.6951ZM70.6776 23.8846H69.769V17.1914L64.0142 23.8846H63.8182V15.1484H64.6912V21.9604L70.4816 15.1484H70.6776V23.8846ZM72.9938 15.9977C73.6075 15.285 74.3657 14.9287 75.2684 14.9287C75.985 14.9287 76.5769 15.1365 77.0441 15.5523C77.5113 15.964 77.7449 16.4985 77.7449 17.1558C77.7449 18.0862 77.3074 18.7533 76.4324 19.1572C77.5846 19.5135 78.1606 20.2856 78.1606 21.4734C78.1606 22.2652 77.9033 22.9027 77.3886 23.3857C76.8739 23.8687 76.1691 24.1102 75.2743 24.1102C74.6488 24.1102 74.1044 23.9816 73.6411 23.7242C73.1819 23.4629 72.7483 23.0076 72.3405 22.3583L73.0175 21.9604C73.4214 22.5542 73.7995 22.9363 74.1519 23.1066C74.5043 23.2729 74.8705 23.356 75.2506 23.356C75.8049 23.356 76.276 23.1957 76.664 22.875C77.0521 22.5542 77.2461 22.0831 77.2461 21.4615C77.2461 21.1329 77.1787 20.8478 77.0441 20.6063C76.9135 20.3608 76.7274 20.1628 76.4859 20.0124C76.2444 19.8619 76.0147 19.7669 75.797 19.7273C75.5792 19.6877 75.2209 19.6679 74.722 19.6679H74.5735V18.9018H74.8646C76.1592 18.9018 76.8066 18.3772 76.8066 17.328C76.8066 16.841 76.6581 16.455 76.3612 16.1699C76.0682 15.8809 75.696 15.7364 75.2446 15.7364C74.6587 15.7364 74.1083 16.0016 73.5936 16.5322L72.9938 15.9977ZM79.8711 15.1484H80.75V18.8127H85.1923V15.1484H86.0713V23.8846H85.1923V19.6679H80.75V23.8846H79.8711V15.1484ZM88.2034 15.1484H93.2099V16.0096H89.0764V18.7415H93.1742V19.5967H89.0764V23.0234H93.1742V23.8846H88.2034V15.1484ZM102.855 16.7697L102.166 17.2983C101.786 16.8034 101.328 16.4292 100.794 16.1759C100.263 15.9185 99.6793 15.7898 99.0419 15.7898C98.345 15.7898 97.6997 15.9581 97.1058 16.2946C96.5119 16.6272 96.0506 17.0766 95.722 17.6428C95.3974 18.205 95.235 18.8385 95.235 19.5432C95.235 20.6083 95.5993 21.4971 96.3278 22.2098C97.0603 22.9225 97.9828 23.2788 99.0953 23.2788C100.319 23.2788 101.342 22.7997 102.166 21.8416L102.855 22.3642C102.419 22.9185 101.875 23.3481 101.222 23.6529C100.572 23.9539 99.8456 24.1043 99.0419 24.1043C97.5136 24.1043 96.308 23.5955 95.4251 22.578C94.6847 21.7188 94.3145 20.6815 94.3145 19.466C94.3145 18.1872 94.7619 17.1122 95.6567 16.2412C96.5554 15.3662 97.6799 14.9287 99.03 14.9287C99.8456 14.9287 100.582 15.091 101.239 15.4157C101.897 15.7364 102.435 16.1877 102.855 16.7697Z" fill="white" />
                            <path d="M24.9467 49.8934C38.7244 49.8934 49.8934 38.7244 49.8934 24.9467C49.8934 11.169 38.7244 0 24.9467 0C11.169 0 0 11.169 0 24.9467C0 38.7244 11.169 49.8934 24.9467 49.8934Z" fill="white" />
                            <path d="M29.0626 30.998H22.1616V31.9607H29.0626V30.998Z" fill="#292929" />
                            <path d="M29.0723 17.7394V16.71H22.6479H21.6852V17.7394V23.6967H19.4834V24.6594H21.6852V28.9297H22.6479V24.6594H26.9468V23.6967H22.6479V17.7394H29.0723Z" fill="#292929" />
                            <path d="M6.06006 16.71V30.6359V31.4175V31.5986H14.8213L15.7627 33.1842L16.9395 30.6359H7.02277V16.71H6.06006Z" fill="#292929" />
                            <path d="M15.7041 16.71H14.7627V28.948H15.7041V16.71Z" fill="#292929" />
                            <path d="M33.1996 31.6462L43.6178 16.9101L42.3691 16.9387L37.832 23.3345L33.1996 16.71H31.9509L37.222 24.1829L31.9509 31.6462H33.1996Z" fill="#292929" />
                            <path d="M38.4038 26.0224L42.4358 31.6652L43.8465 31.6461L39.0806 25.2217L38.4038 26.0224Z" fill="#292929" />
                        </svg>
                    </a>
                </FooterBottom>
            </Container>
        </FooterStyle>
    )
}

const FooterBottom = styled.div`
    margin-top: 30px;
    border-top: 1px solid #733333;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {

    }
`;

const FooterStyle = styled.footer`
    margin-top: 80px;
    background: #5B1717;
    padding: 40px 0;
    padding-bottom: 30px;

    .instagram {
        margin-right: 6px;
    }

    .link-wraper {
        margin-top: 15px;
    }

    .top {
        display: flex;
        justify-content: space-between;
    }

    .title {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FBEDE6;
    margin-bottom: 15px;
    }

    p{
        font-size: 14px;
        line-height: 19px;
        color: #bebebe;
        margin-left: 10px;
    }

    .informations-container__item {
        display: flex;
        margin-bottom: 10px;
    }
`;

export default Footer;
