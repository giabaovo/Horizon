import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

function Home() {
    const loggedIn = {firstName: "Bao", lastName: "Vo", email: "giabaovo123456@gmail.com"}

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

                Recent
            </div>
            
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 123.50}, {currentBalance: 7.99}]}
            />
        </section>
    );
}

export default Home;