import Header from '../../components/Header';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <>
      < Header />

      <div className="profile-page">
        <p className="profile-title">Hi, {'Sonu'}</p>
        <p className="profile-subtitle"> This information will be used to personalize your experience.</p>
        <p className="profile-subtitle-2">Fill the details below</p>

        <div className="form-group">
          <label className="profile-label">Your name</label>
          <input type="text" name="yourName" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label className="profile-label">Crush name</label>
          <input type="text" name="crushName" placeholder="Enter your crush name" required />
        </div>

        <div className="hobby-group">
          <div className="form-group">
            <label className="profile-label">Hobby 1</label>
            <select name="hobby-1" required>
              <option value="">Select a hobby</option>
              <option value="Cooking">Cooking</option>
              <option value="Gaming">Gaming</option>
              <option value="Gym">Gym</option>
              <option value="Reading">Reading</option>
            </select>
          </div>

          <div className="form-group">
            <label className="profile-label">Hobby 2</label>
            <select name="hobby-2" required>
              <option value="">Select a hobby</option>
              <option value="Cooking">Cooking</option>
              <option value="Gaming">Gaming</option>
              <option value="Gym">Gym</option>
              <option value="Reading">Reading</option>
            </select>
          </div>

          <div className="form-group">
            <label className="profile-label">Hobby 3</label>
            <select name="hobby-3" required>
              <option value="">Select a hobby</option>
              <option value="Cooking">Cooking</option>
              <option value="Gaming">Gaming</option>
              <option value="Gym">Gym</option>
              <option value="Reading">Reading</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="profile-label">Add a photo</label>
          <input type="file" name="photo" accept="image/*" required />
        </div>

        <div className="form-group">
          <label className="profile-label">Message</label>
          <textarea name="message" placeholder="Write something..." rows="4"
          />
        </div>

        <button className="button-primary save-button">Save</button>

      </div>
    </>
  );
}

export default ProfilePage;