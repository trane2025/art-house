import { YMInitializer } from 'react-yandex-metrika';
import React from 'react';

class YandexMetrica extends React.Component {
    render() {
        return (

            <div>
                <YMInitializer accounts={[65246896]} options={{
                    webvisor: true,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                }} />
            </div>
        )
    }
};

export default YandexMetrica;