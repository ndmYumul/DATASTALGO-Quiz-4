import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailScreen from './screens/DetailScreen';
import ProjectCreateScreen from './screens/ProjectCreateScreen';
import TaskCreateScreen from './screens/TaskCreateScreen';
import UserListScreen from './screens/UserListScreen';
import UserCreateScreen from './screens/UserCreateScreen';

function App() {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path='/api/v1/projects' element={<HomeScreen />} exact />
              <Route path='/api/v1/projects/:id' element={<DetailScreen />} />
              <Route path='/api/v1/projects/create' element={<ProjectCreateScreen />} />
              <Route path='/api/v1/projects/:id/task/create' element={<TaskCreateScreen />} />
              <Route path='/api/v1/users' element={<UserListScreen />} />
              <Route path='/api/v1/users/create' element={<UserCreateScreen />} />
            </Routes>
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;