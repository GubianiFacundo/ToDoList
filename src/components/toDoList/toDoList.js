export default {
  name: 'to-do-list',
  components: {},
  props: [],
  data() {
    return {
      taskList: Array(),
      taskName: '',
      taskDescription: '',
      isWrong: false,
    }
  },
  computed: {
    render() {
      return this.taskList;
    }
  },
  mounted() {

  },
  methods: {
    pushToTaskList() {
      var self = this;
      var result = {
        name: self.taskName,
        description: self.taskDescription,
      }

      if (!self.isEmptyOrSpaces(self.taskName) && !self.isEmptyOrSpaces(self.taskDescription)) {
        self.taskList.push(result);
      } else {
        self.isWrong = true;
        setTimeout(() => {
          self.isWrong = false;
        }, 2500);
      }

      self.taskName = '';
      self.taskDescription = '';
    },
    isEmptyOrSpaces(str) {
      return str == null || str.trim() == '';
    },
    removeTask(index) {
      this.taskList.splice(index, 1);
    },
  }
}