import React from 'react';
import Card, {CardVariant} from "./component/Card";

const App = () => {
    return (
        <div>
            <Card variant={CardVariant.outlined} height="200px" width="200px">
                <button>Кнопка</button>
            </Card>
        </div>
    );
};

export default App;