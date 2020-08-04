import Api from '@/services/services'

export default {
  searchUser (params) {
    return Api().get('users/' + params.username);
  },
}
