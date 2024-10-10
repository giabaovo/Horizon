import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

function Home() {
    const loggedIn = {firstName: "Bao Vo"}

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        subtext="ABCB"
                        user={loggedIn?.firstName || "Guest"}
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1234.45}
                    />
                </header>
            </div>
        </section>
    );
}

export default Home;