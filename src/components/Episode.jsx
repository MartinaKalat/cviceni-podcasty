export const Episode = ({ num, title, guest}) => {

    const episodes = [
        { num: 126, title: 'Robot, který snědl koblihu', guest: 'Radovan Siwek' },
        { num: 127, title: 'Hledání plyšového Yettiho', guest: 'Vojtěch Ryba' },
        { num: 128, title: 'Moderní hrachová polévka', guest: 'Kamila Štancová' },
        { num: 129, title: 'Poloautomatické zrcadlo', guest: 'Janka Janovská' },
        { num: 130, title: 'Máčené hlavy parlamentu', guest: 'Jonáš Daněk' },
        { num: 131, title: 'Služby na hraně přívěsu', guest: 'Tereza Křivánková' },
        { num: 132, title: 'Klasifikace sněžných klokanů', guest: 'Josef Stix' },
        { num: 133, title: 'Rybolov v Oceánu bouří', guest: 'Ludmila Gajová' },
    ];


    return (
        <div className="episodes-list">
            {episodes.map((episode) => (
                <div className="episode" key={episode.num}>
                    <div className="episode__num">{episode.num}</div>
                    <div className="episode__body">
                        <div className="episode__title">{episode.title}</div>
                        <div className="episode__guest">{episode.guest}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};