import "./Header.css";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
export const Header = ({ option }) => {
  return (
    <>
      <div className="containerLogoUserLoged">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }} className="mini-info-userLoged">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px'
          }}>
            <h3 className="salutation">
              <strong>O</strong>
              <strong>l</strong>
              <strong>a</strong>!
            </h3>
            <p>Agente da Empresa</p>
          </div>
          <div className="setting">
            <SettingsSuggestIcon onClick={option} />
          </div>
        </div>
        <div className="userLoged-office">
          <h3>Management level:</h3>
          <p>Admin</p>
        </div>
      </div>
    </>
  );
};
