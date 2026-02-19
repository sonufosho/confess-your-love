import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header';
import './ProfilePage.css';

function ProfilePage() {
  const { username } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const loadProfile = async () => {
      const response = await axios.get(`http://localhost:3000/api/user/${username}`, { withCredentials: true });
      setUser(response.data);
    }

    loadProfile();
  }, [username]);

  if (!user) return null;

  return (
    <>
      < Header />

      <div className="profile-page">
        <p className="profile-title">Hi, {user.fullName}</p>
        <p className="profile-subtitle"> This information will be used to personalize your experience.</p>
        <p className="profile-subtitle-2">Fill the details below</p>

        <div className="form-group">
          <label className="profile-label">Your name</label>
          <input type="text" name="yourName" placeholder="James Bond" required />
        </div>

        <div className="form-group">
          <label className="profile-label">Crush name</label>
          <input type="text" name="crushName" placeholder="Who's your crush?" required />
        </div>

        <div className="form-group">
          <label className="profile-label">Relationship type</label>
          <select name="be-my" required>
            <option value="">Choose your relationship</option>
            <option value="Girlfriend">Girlfriend</option>
            <option value="Boyfriend">Boyfriend</option>
            <option value="Wife">Wife</option>
            <option value="Husband">Husband</option>
            <option value="Valentine">Valentine</option>
          </select>
        </div>

        <div className="form-group">
          <label className="profile-label">Hobby 1</label>
          <select name="hobby-1" required>
            <option value="">Select a hobby</option>
            <option value="I love cooking">I love cooking</option>
            <option value="I love cats">I love cats</option>
            <option value="I love dogs">I love dogs</option>
            <option value="I have a soft heart">I have a soft heart</option>
            <option value="I have muscules">I have muscules</option>
            <option value="I can drive">I can drive</option>
          </select>
        </div>

        <div className="form-group">
          <label className="profile-label">Hobby 2</label>
          <select name="hobby-2" required>
            <option value="">Select a hobby</option>
            <option value="I can do the dishes">I can do the dishes</option>
            <option value="I can carry you in games">I can carry you in games</option>
            <option value="I can give you hugs">I can give you hugs</option>
            <option value="I can give you kisses">I can give you kisses</option>
            <option value="I can take you to coffee dates">I can take you to coffee dates</option>
            <option value="I can take you to dinner dates">I can take you to dinner dates</option>
          </select>
        </div>

        <div className="form-group">
          <label className="profile-label">Hobby 3</label>
          <select name="hobby-3" required>
            <option value="">Select a hobby</option>
            <option value="I would cook for you">I would love to cook with you</option>
            <option value="I would hold your hands">I would love to hold your hands</option>
            <option value="I would workout with you">I would love to workout with you</option>
            <option value="I would give you flowers">I can give you flowers</option>
            <option value="I would take you to shopping">I can take you to shopping</option>
            <option value="I would take you to long drives">I can take you to long drives</option>
          </select>
        </div>

        <div className="form-group">
          <label className="profile-label">Add a photo</label>
          <input type="file" name="photo" accept="image/*" required />
        </div>

        <div className="form-group">
          <label className="profile-label">Message</label>
          <textarea name="message" placeholder="Write something..." rows="4" required />
        </div>

        <button className="button-primary save-button">Save</button>

      </div >
    </>
  );
}

export default ProfilePage;