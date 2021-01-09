import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import {
	ProSidebar,
	Menu,
	MenuItem,
	SubMenu,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
} from 'react-pro-sidebar';
import {
	FaList,
	FaOutdent,
	FaCloudDownloadAlt,
	FaFolder,
	FaGlassWhiskey,
	FaFilm,
} from 'react-icons/fa';
import sidebarBg from './assets/bg1.jpg';
import { Link } from 'react-router-dom';

/* Setup component state that tracks visibility of the image. Initially, we'll set
  the image to visible (toggled true) */
//  const [toggled, setToggled] = React.useState(true);
//  const toggleImage = () => setToggled(!toggled);

const Aside = ({ image, collapsed, handleCollapsedChange }) => {
	const intl = useIntl();
	return (
		<ProSidebar
			image={image ? sidebarBg : false}
			collapsed={collapsed}
			breakPoint='md'
		>
			<SidebarHeader>
				<div
					style={{
						padding: '24px',
						textTransform: 'uppercase',
						fontWeight: 'bold',
						fontSize: 14,
						letterSpacing: '1px',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
				>
					<label>
						{collapsed ? '>>' : '<< Spellware'}
						<Switch
							height='0'
							width='0'
							onChange={handleCollapsedChange}
							checked={collapsed}
							visible='false'
						/>
					</label>
				</div>
			</SidebarHeader>

			<SidebarContent>
				<Menu iconShape='circle'>
					<SubMenu title={intl.formatMessage({ id: 'pvr' })} icon={<FaFilm />}>
						<MenuItem>
							<a href='http://192.168.0.44:32400/web/index.html' target='plex'>
								Plex
							</a>{' '}
						</MenuItem>
						<MenuItem>
							{' '}
							<a href='http://192.168.0.40:8112/' target='deluge'>
								Deluge
							</a>{' '}
						</MenuItem>
						<MenuItem>
							{' '}
							<a href='http://192.168.0.40:8989/' target='sonarr'>
								Sonarr
							</a>{' '}
						</MenuItem>
						<MenuItem>
							{' '}
							<a href='http://192.168.0.40:7878/' target='radarr'>
								Radarr
							</a>{' '}
						</MenuItem>
						<MenuItem>
							{' '}
							<a href='https://www.privateinternetaccess.com/' target='pia'>
								Private Internet Access
							</a>{' '}
						</MenuItem>
					</SubMenu>
				</Menu>

				<Menu iconShape='circle'>
					<SubMenu
						title={intl.formatMessage({ id: 'torrents' })}
						icon={<FaCloudDownloadAlt />}
					>
						<MenuItem>
							{' '}
							<a href='https://yts.mx/browse-movies' target='yts'>
								YTS Movies
							</a>{' '}
						</MenuItem>
						<MenuItem>
							{' '}
							<a href='https://thepiratebay.org/index.html' target='tpb'>
								The Pirate Bay
							</a>{' '}
						</MenuItem>
						<MenuItem>
							{' '}
							<a href='https://eztv.re/' target=''>
								Ez Tv
							</a>{' '}
						</MenuItem>
						<MenuItem>
							{' '}
							<a href='https://extratorrents.it/home' target=''>
								Extra Torrents
							</a>{' '}
						</MenuItem>
						<MenuItem>
							{' '}
							<a href='https://1337x.to/home/' target=''>
								L33t
							</a>{' '}
						</MenuItem>
					</SubMenu>
				</Menu>

				<Menu iconShape='circle'>
					<SubMenu
						title={intl.formatMessage({ id: 'mysticArms' })}
						icon={<FaGlassWhiskey />}
					>
						<MenuItem>
							{' '}
							<a href='http://192.168.0.136:4200/#/' target=''>
								Gun Control
							</a>{' '}
						</MenuItem>
						<MenuItem>
							{' '}
							<a href='http://192.168.0.136:3000/' target=''>
								Kiosk
							</a>{' '}
						</MenuItem>
					</SubMenu>
				</Menu>

				<Menu iconShape='circle'>
					<SubMenu title='Personal Projects' icon={<FaFolder />}>
						<MenuItem>
							{' '}
							<a href='' target=''>
								Harley
							</a>{' '}
						</MenuItem>
						<MenuItem>
							{' '}
							<a href='' target=''>
								Hardrock
							</a>{' '}
						</MenuItem>
						<MenuItem>
							{' '}
							<a href='' target=''>
								Lotto
							</a>{' '}
						</MenuItem>
						<MenuItem>
							<Link to='/slush'>Slush</Link>
						</MenuItem>
					</SubMenu>
				</Menu>
			</SidebarContent>

			<SidebarFooter style={{ textAlign: 'center' }}>
				<div
					className='sidebar-btn-wrapper'
					style={{
						padding: '20px 24px',
					}}
				></div>
			</SidebarFooter>
		</ProSidebar>
	);
};

export default Aside;
