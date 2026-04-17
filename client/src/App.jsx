import { Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Market from './pages/Market'
import AssetDetail from './pages/AssetDetail'

export default function App() {
  return (
    <div className="app">
      <nav className="sidebar">
        <div className="logo">
          <span className="logo-icon">&#9670;</span>
          <h1>AssetTracker</h1>
        </div>
        <ul>
          <li><NavLink to="/" end>Dashboard</NavLink></li>
          <li><NavLink to="/transactions">Transactions</NavLink></li>
          <li><NavLink to="/market">Market</NavLink></li>
        </ul>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/market" element={<Market />} />
          <Route path="/asset/:coinId" element={<AssetDetail />} />
        </Routes>
      </main>

      <nav className="bottom-nav">
        <NavLink to="/" end className="nav-item">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Home</span>
        </NavLink>
        <NavLink to="/transactions" className="nav-item">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
          <span>Trades</span>
        </NavLink>
        <NavLink to="/market" className="nav-item">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
          <span>Market</span>
        </NavLink>
      </nav>
    </div>
  )
}
