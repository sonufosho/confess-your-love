import Header from '../../components/Header';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <>
      < Header />

      <div className="profile-page">
        <p className="profile-subtitle"> This information will be used to personalize your experience.</p>
        <p className="profile-subtitle-2">Fill the details below</p>

        <div className="form-group">
          <label className="profile-label">Your name</label>
          <input type="text" name="yourName" placeholder="James Bond" required />
        </div>

        <div className="form-group">
          <label className="profile-label">Crush's name</label>
          <input type="text" name="crushName" placeholder="Who's your crush?" required />
        </div>

        <div className="form-group">
          <label className="profile-label">Crush's gender</label>
          <select name="crush-gender" required>
            <option value="">Select your crush's gender</option>
            <option value="Female">Female</option>
            <option value="Male" disabled>Male</option>
          </select>
        </div>

        <div className="form-group">
          <label className="profile-label">Relationship type</label>
          <select name="relationship-type" required>
            <option value="">Choose your relationship</option>
            <option value="Love">Love</option>
            <option value="Girlfriend">Girlfriend</option>
            <option value="Boyfriend" disabled>Boyfriend</option>
            <option value="Wife">Wife</option>
            <option value="Husband" disabled>Husband</option>
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
            <option value="I will cook for you">I will cook with you</option>
            <option value="I will hold your hand">I will hold your hand</option>
            <option value="I will workout with you">I will workout with you</option>
            <option value="I will give you flowers">I will give you flowers</option>
            <option value="I will take you to shopping">I will take you to shopping</option>
            <option value="I will take you to long drives">I will take you to long drives</option>
          </select>
        </div>

        <div className="form-group">
          <label className="profile-label">Add a photo (currently unavailable)</label>
          <input type="file" name="photo" accept="image/*" disabled />
        </div>

        <div className="form-group">
          <label className="profile-label">Message (currently unavailable)</label>
          <textarea name="message" placeholder="Write something..." rows="4" disabled />
        </div>

        <button className="button-primary save-button">Save</button>

      </div >
    </>
  );
}

export default ProfilePage;